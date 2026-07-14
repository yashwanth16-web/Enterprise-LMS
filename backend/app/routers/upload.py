import os
import shutil

from fastapi import APIRouter, UploadFile, File, HTTPException, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.lesson import Lesson

router = APIRouter(
    prefix="/upload",
    tags=["Video Upload"]
)

UPLOAD_FOLDER = "uploads/videos"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/lesson/{lesson_id}")
async def upload_video(
    lesson_id: int,
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):

    lesson = db.query(Lesson).filter(
        Lesson.id == lesson_id
    ).first()

    if not lesson:
        raise HTTPException(
            status_code=404,
            detail="Lesson not found"
        )

    if not file.filename.endswith(".mp4"):
        raise HTTPException(
            status_code=400,
            detail="Only MP4 files are allowed"
        )

    filename = f"lesson_{lesson_id}_{file.filename}"

    filepath = os.path.join(
        UPLOAD_FOLDER,
        filename
    )

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    lesson.video_url = f"/uploads/videos/{filename}"

    db.commit()

    return {
        "message": "Video uploaded successfully",
        "lesson_id": lesson.id,
        "video_url": lesson.video_url
    }