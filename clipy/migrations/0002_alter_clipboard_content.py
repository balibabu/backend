# Generated by Django 4.2.3 on 2023-08-13 16:35

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("clipy", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="clipboard",
            name="content",
            field=models.TextField(),
        ),
    ]
