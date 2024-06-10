from django.contrib import admin
from django.urls import path, re_path
from . import views

# Set the admin site header
admin.site.site_header = 'erikransom.com - admin'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('links_categories/', views.get_all_links_categories),
    path('links_by_category/<int:category_id>/', views.get_links_by_category),
    path('links/', views.get_all_links),
    path('credits/', views.get_all_credits),
    path('credits/readingsconcerts/', views.get_readingsconcerts_credits),
    path('credits/fullproductions/', views.get_fullproductions_credits),
    path('credits/playsmusicals/', views.get_playsmusicals_credits),
    path('credits/filmtelevision/', views.get_filmtelevision_credits),
    path('credits/voiceover/', views.get_voiceover_credits),
    path('services/', views.get_all_services),
    path('services/acting/', views.get_acting_services),
    path('services/writing/', views.get_writing_services),
    path('experiences/', views.get_all_experiences),
    path('experiences/acting/', views.get_actor_experiences),
    path('experiences/writing/', views.get_writer_experiences),
    path('dialects/', views.get_all_dialects),
    path('languages/', views.get_all_languages),
    path('equipment_techs/', views.get_all_equipment_techs),
    path('equipment_techs/microphones/', views.get_microphones_equipment_techs),
    path('equipment_techs/audiointerfaces/', views.get_audiointerfaces_equipment_techs),
    path('equipment_techs/computers/', views.get_computers_equipment_techs),
    path('equipment_techs/daws/', views.get_daws_equipment_techs),
    path('equipment_techs/booth/', views.get_booth_equipment_techs),
    path('credits_categories/', views.get_all_credits_categories),
    path('credits_by_category/<int:category_id>/', views.get_credits_by_category),
    path('equipments_by_equipment_tech/<int:equipment_tech_id>/', views.get_equipments_by_equipment_tech),
    path('samples/', views.get_all_samples),
    path('voice_actor_headlines/', views.get_all_voice_actor_headlines),
    path('voice_actor_bios/', views.get_all_voice_actor_bios),
    path('voice_actor_background_select_credits/', views.get_all_voice_actor_background_select_credits),
    path('voice_actor_turn_around_times/', views.get_all_voice_actor_turn_around_times),
    path('voice_actor_live_sessions/', views.get_all_voice_actor_live_sessions),
    path('voice_actor_special_skills/', views.get_all_voice_actor_special_skills),
    path('writer_headlines/', views.get_all_writer_headlines),
    path('writer_bios/', views.get_all_writer_bios),
    path('writer_additional_skills/', views.get_all_writer_additional_skills),

    # Catch-all route to serve the React index.html
    re_path(r'^.*$', views.index),
]