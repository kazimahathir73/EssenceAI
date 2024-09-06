from django.db import models

class Summarize_table(models.Model):
    input_text = models.TextField()
    output_text = models.TextField()

    def __str__(self):
        return f"Table is created"
