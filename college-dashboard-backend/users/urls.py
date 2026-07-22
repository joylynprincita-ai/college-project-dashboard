from django.urls import path

from .views import (
    login_view,
    register_student,
    register_faculty
)


urlpatterns = [

    path(
        'login/',
        login_view
    ),

    path(
        'register/student/',
        register_student
    ),

    path(
        'register/faculty/',
        register_faculty
    ),

]