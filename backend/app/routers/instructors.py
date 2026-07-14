from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.database import get_db

from app.schemas.instructor import (
    InstructorCreate,
    InstructorUpdate,
    InstructorResponse,
)

from app.services.instructor_service import (
    create_instructor,
    get_all_instructors,
    get_instructor_by_id,
    update_instructor,
    delete_instructor,
)

router = APIRouter(
    prefix="/instructors",
    tags=["Instructors"],
)


@router.post(
    "",
    response_model=InstructorResponse,
)
def add_instructor(
    instructor: InstructorCreate,
    db: Session = Depends(get_db),
):
    return create_instructor(
        db,
        instructor,
    )


@router.get(
    "",
    response_model=list[InstructorResponse],
)
def instructors(
    db: Session = Depends(get_db),
):
    return get_all_instructors(db)


@router.get(
    "/{instructor_id}",
    response_model=InstructorResponse,
)
def get_instructor(
    instructor_id: int,
    db: Session = Depends(get_db),
):
    instructor = get_instructor_by_id(
        db,
        instructor_id,
    )

    if not instructor:
        raise HTTPException(
            status_code=404,
            detail="Instructor not found",
        )

    return instructor


@router.put(
    "/{instructor_id}",
    response_model=InstructorResponse,
)
def edit_instructor(
    instructor_id: int,
    instructor: InstructorUpdate,
    db: Session = Depends(get_db),
):
    updated = update_instructor(
        db,
        instructor_id,
        instructor,
    )

    if not updated:
        raise HTTPException(
            status_code=404,
            detail="Instructor not found",
        )

    return updated


@router.delete(
    "/{instructor_id}",
)
def remove_instructor(
    instructor_id: int,
    db: Session = Depends(get_db),
):
    deleted = delete_instructor(
        db,
        instructor_id,
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Instructor not found",
        )

    return {
        "message": "Instructor deleted successfully"
    }