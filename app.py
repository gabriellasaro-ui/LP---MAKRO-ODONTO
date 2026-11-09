from flask import Flask, render_template, abort
import os
import re

app = Flask(__name__)

# WhatsApp da unidade: so digitos, com DDI+DDD (ex.: 5561999999999).
# Fonte unica — o widget e o botao de sucesso de TODAS as LPs leem daqui.
# Padrao: telefone da unidade (61) 3686-2724, o mesmo do link tel: das LPs.
# Para usar outro numero sem mexer no codigo, defina a variavel de ambiente
# WHATSAPP_NUMBER. Valor invalido cai de volta no padrao.
DEFAULT_WHATSAPP_NUMBER = "556136862724"
_WA_DIGITS = re.sub(r"\D", "", os.environ.get("WHATSAPP_NUMBER", ""))
WHATSAPP_NUMBER = _WA_DIGITS if re.fullmatch(r"\d{12,13}", _WA_DIGITS) else DEFAULT_WHATSAPP_NUMBER


@app.context_processor
def inject_whatsapp():
    return {"wa_number": WHATSAPP_NUMBER}


# Evita cache de template e de arquivos estaticos (CSS/imagens) durante o desenvolvimento
app.config["TEMPLATES_AUTO_RELOAD"] = True
app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0
app.jinja_env.auto_reload = True

# Caminho absoluto derivado do proprio app, em vez de "templates" relativo ao
# diretorio de trabalho do processo. O container roda Linux, onde "Templates" e
# "templates" sao pastas diferentes — foi o que quebrou o deploy.
TEMPLATE_DIR = os.path.join(app.root_path, app.template_folder)


def available_slugs():
    """Slugs publicaveis. Lista vazia se a pasta nao existir, em vez de estourar."""
    if not os.path.isdir(TEMPLATE_DIR):
        return []
    return sorted(
        name[:-len(".html")]
        for name in os.listdir(TEMPLATE_DIR)
        if name.endswith(".html")
    )


@app.route("/<slug>")
def lp(slug):
    # Allowlist: so serve o que existe de fato na pasta. Tambem impede que um
    # slug com ".." tente escapar do diretorio.
    if slug not in available_slugs():
        abort(404)
    return render_template(f"{slug}.html")


@app.route("/lp/help")
def list_slugs():
    return {"template_dir": TEMPLATE_DIR, "slugs": available_slugs()}


@app.route("/healthz")
def healthz():
    """Falha explicita quando nenhum template e encontrado, para o deploy nao
    subir 'saudavel' devolvendo 404 em todas as rotas."""
    slugs = available_slugs()
    return {"ok": bool(slugs), "slugs": len(slugs)}, (200 if slugs else 503)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5017, debug=False)
