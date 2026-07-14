from pydantic import BaseModel


class SearchItem(BaseModel):
    id: int
    title: str
    type: str
    url: str