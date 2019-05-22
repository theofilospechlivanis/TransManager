import os

from flask import Flask


def create_app(test_config=None):
    """Create and configure an instance of the Flask application."""
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        # a default secret that should be overridden by instance config
        SECRET_KEY='dev',
        # store the database in the instance folder
        DATABASE=os.path.join(app.instance_path, 'transmanager.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # register the database commands
    from . import db
    db.init_app(app)
    
    from . import auth
    app.register_blueprint(auth.bp)

    from . import transmanager
    app.register_blueprint(transmanager.bp)
    app.add_url_rule('/', endpoint='index')

    from . import quiz
    app.register_blueprint(quiz.bp)

    from . import help_pkg
    app.register_blueprint(help_pkg.bp)

    from . import profile
    app.register_blueprint(profile.bp)

    from . import nav
    app.register_blueprint(nav.bp)

    return app
