# Generated by Django 4.2.3 on 2023-08-07 14:23

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("fileapi", "0002_file_uploaded_on_file_user"),
    ]

    operations = [
        migrations.AddField(
            model_name="file",
            name="filename",
            field=models.CharField(default="filename", max_length=250),
            preserve_default=False,
        ),
    ]