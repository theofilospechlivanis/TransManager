from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)
from werkzeug.exceptions import abort

bp = Blueprint('nav', __name__)


@bp.route('/nav')
def nav():
    return render_template('nav/nav.html')
