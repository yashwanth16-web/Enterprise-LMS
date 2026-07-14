from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.schemas.search import SearchItem
from app.services.search_service import global_search

router = APIRouter(
    prefix="/search",
    tags=["Search"],
)


@router.get(
    "/",
    response_model=list[SearchItem],
)
def search(
    q: str,
    db: Session = Depends(get_db),
):
    return global_search(db, q)