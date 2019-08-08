from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)
from werkzeug.exceptions import abort

from transmanager.auth import login_required
from transmanager.db import get_db

bp = Blueprint('timetable_data', __name__)


@bp.route('/timetable_data')
def timetable_data():
    return render_template('timetable_data/timetable_data.html')
