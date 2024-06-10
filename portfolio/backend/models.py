from django.db import models

class LinksCategory(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name + " (Link Category #" + str(self.pk) + ")"

class Link(models.Model):
    text = models.CharField(max_length=50)
    url = models.URLField(max_length=200)
    category = models.ForeignKey(LinksCategory, on_delete=models.CASCADE, default=3)

    def __str__(self):
        return self.text

class CreditsCategory(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name + " (Credit Category #" + str(self.pk) + ")"

class Credit(models.Model):
    title = models.CharField(max_length=200)
    note = models.CharField(max_length=200, blank=True)
    location = models.CharField(max_length=200)
    role = models.CharField(max_length=200)
    awards = models.CharField(max_length=200, blank=True)
    category = models.ForeignKey(CreditsCategory, on_delete=models.CASCADE)

    def __str__(self):
        return self.title + " - " + self.location + " - " + self.role

class Service(models.Model):
    body = models.TextField()
    acting = models.BooleanField(default=False)
    writing = models.BooleanField(default=False)

    def __str__(self):
        return self.body

class Experience(models.Model):
    body = models.TextField()
    acting = models.BooleanField(default=False)
    writing = models.BooleanField(default=False)

    def __str__(self):
        return self.body

class Dialect(models.Model):
    name = models.CharField(max_length=100)
    note = models.CharField(max_length=100)

    def __str__(self):
        return self.name + " (" + self.note + ")"

class Language(models.Model):
    name = models.CharField(max_length=100)
    note = models.CharField(max_length=100)

    def __str__(self):
        return self.name + " (" + self.note + ")"

class EquipmentTech(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name + " (EquipmentTech #" + str(self.pk) + ")"

class Equipment(models.Model):
    name = models.CharField(max_length=200)
    tech = models.ForeignKey(EquipmentTech, on_delete=models.CASCADE)
    default = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class Sample(models.Model):
    name = models.CharField(max_length=200)
    note =models.CharField(max_length=500, blank=True)
    file = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class VoiceActorHeadline(models.Model):
    text = models.CharField(max_length=1000)

    def __str__(self):
        return self.text

class VoiceActorBio(models.Model):
    text = models.CharField(max_length=3000)

    def __str__(self):
        return self.text

class VoiceActorBackgroundSelectCredit(models.Model):
    text = models.CharField(max_length=3000)

    def __str__(self):
        return self.text

class VoiceActorTurnAroundTime(models.Model):
    text = models.CharField(max_length=1000)

    def __str__(self):
        return self.text

class VoiceActorLiveSession(models.Model):
    text = models.CharField(max_length=1000)

    def __str__(self):
        return self.text

class VoiceActorSpecialSkill(models.Model):
    text = models.CharField(max_length=1000)

    def __str__(self):
        return self.text

class WriterHeadline(models.Model):
    text = models.CharField(max_length=1000)

    def __str__(self):
        return self.text

class WriterBio(models.Model):
    text = models.CharField(max_length=3000)

    def __str__(self):
        return self.text

class WriterAdditionalSkill(models.Model):
    text = models.CharField(max_length=1000)

    def __str__(self):
        return self.text