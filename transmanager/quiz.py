from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)
from werkzeug.exceptions import abort

from transmanager.auth import login_required
from transmanager.db import get_db

bp = Blueprint('quiz', __name__)


@bp.route('/quiz')
def quiz():
    return render_template('quiz/quiz.html')


@bp.route('/quiz1')
def quiz1():
    return render_template('quiz/quiz1.html')


@bp.route('/quiz2')
def quiz2():
    return render_template('quiz/quiz2.html')
