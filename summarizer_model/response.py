def get_summary(paragraph):
    from transformers import T5Tokenizer, T5ForConditionalGeneration
    import torch

    model_path = "t5-base"
    model = T5ForConditionalGeneration.from_pretrained(model_path)
    tokenizer = T5Tokenizer.from_pretrained(model_path)

    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    model.to(device)
    model.eval()
    
    inputs = tokenizer("summarize: " + paragraph, return_tensors="pt", max_length=200, truncation=True)
    inputs = {key: value.to(device) for key, value in inputs.items()}

    output_ids = model.generate(**inputs, max_length=150, num_beams=5, early_stopping=True)

    summary = tokenizer.decode(output_ids[0], skip_special_tokens=True)

    return summary

