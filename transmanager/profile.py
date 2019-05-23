from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)
from werkzeug.exceptions import abort

bp = Blueprint('profile', __name__)


@bp.route('/profile')
def profile():
    return render_template('profile/profile.html')
