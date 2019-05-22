from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)
from werkzeug.exceptions import abort

bp = Blueprint('help', __name__)


@bp.route('/help')
def help():
    return render_template('help/help.html')
