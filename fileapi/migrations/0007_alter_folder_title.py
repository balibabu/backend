# Generated by Django 4.2.3 on 2023-08-18 08:30

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("fileapi", "0006_file_folder"),
    ]

    operations = [
        migrations.AlterField(
            model_name="folder",
            name="title",
            field=models.CharField(max_length=250, null=True, unique=True),
        ),
    ]
