from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.database import get_db

from app.schemas.lesson import (
    LessonCreate,
    LessonUpdate,
    LessonResponse
)

from app.services.lesson_service import (
    create_lesson,
    get_lessons_by_course,
    get_lesson_by_id,
    update_lesson,
    delete_lesson
)

router = APIRouter(
    prefix="/lessons",
    tags=["Lessons"]
)


@router.post(
    "",
    response_model=LessonResponse
)
def add_lesson(
    lesson: LessonCreate,
    db: Session = Depends(get_db)
):
    return create_lesson(db, lesson)


@router.get(
    "/course/{course_id}",
    response_model=list[LessonResponse]
)
def get_course_lessons(
    course_id: int,
    db: Session = Depends(get_db)
):
    return get_lessons_by_course(db, course_id)


@router.get(
    "/{lesson_id}",
    response_model=LessonResponse
)
def get_lesson(
    lesson_id: int,
    db: Session = Depends(get_db)
):

    lesson = get_lesson_by_id(db, lesson_id)

    if not lesson:
        raise HTTPException(
            status_code=404,
            detail="Lesson not found"
        )

    return lesson


@router.put(
    "/{lesson_id}",
    response_model=LessonResponse
)
def edit_lesson(
    lesson_id: int,
    lesson: LessonUpdate,
    db: Session = Depends(get_db)
):

    updated = update_lesson(
        db,
        lesson_id,
        lesson
    )

    if not updated:
        raise HTTPException(
            status_code=404,
            detail="Lesson not found"
        )

    return updated


@router.delete("/{lesson_id}")
def remove_lesson(
    lesson_id: int,
    db: Session = Depends(get_db)
):

    deleted = delete_lesson(
        db,
        lesson_id
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Lesson not found"
        )

    return {
        "message": "Lesson deleted successfully"
    }