from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message":"Data Processor Service Online"}

@app.post("/analyze-data")
def analyze_data(payload:dict):
    data_length = len(payload.get("data", []))
    
    return {
        "status": "success",
        "processed_by": "FastAPI",
        "input_count": data_length,
        "result_message": f"Diterima dan diproses {data_length} item data."
    }