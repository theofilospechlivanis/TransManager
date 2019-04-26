from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)
from werkzeug.exceptions import abort

from transmanager.auth import login_required
from transmanager.db import get_db

bp = Blueprint('transmanager', __name__)


@bp.route('/')
def index():
    return render_template('transmanager/index.html')
