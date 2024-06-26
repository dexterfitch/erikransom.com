from django.contrib import admin
from django.contrib.auth.models import Group
from .models import LinksCategory, Link, CreditsCategory, Credit, Service, Experience, Dialect, Language, EquipmentTech, Equipment, Sample, VoiceActorHeadline, VoiceActorBio, VoiceActorBackgroundSelectCredit, VoiceActorTurnAroundTime, VoiceActorLiveSession, VoiceActorSpecialSkill, WriterHeadline, WriterBio, WriterAdditionalSkill

admin.site.register(LinksCategory)
admin.site.register(Link)
admin.site.register(CreditsCategory)
admin.site.register(Credit)
admin.site.register(Service)
admin.site.register(Experience)
admin.site.register(Dialect)
admin.site.register(Language)
admin.site.register(EquipmentTech)
admin.site.register(Equipment)
admin.site.register(Sample)
admin.site.register(VoiceActorHeadline)
admin.site.register(VoiceActorBio)
admin.site.register(VoiceActorBackgroundSelectCredit)
admin.site.register(VoiceActorTurnAroundTime)
admin.site.register(VoiceActorLiveSession)
admin.site.register(VoiceActorSpecialSkill)
admin.site.register(WriterHeadline)
admin.site.register(WriterBio)
admin.site.register(WriterAdditionalSkill)
admin.site.unregister(Group)