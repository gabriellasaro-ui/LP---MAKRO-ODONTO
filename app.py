from flask import Flask, render_template, abort
import os

app = Flask(__name__)

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
