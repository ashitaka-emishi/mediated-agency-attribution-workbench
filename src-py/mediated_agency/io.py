from __future__ import annotations

import json
from pathlib import Path
from typing import Any


def repository_root() -> Path:
    return Path(__file__).resolve().parents[2]


def load_json(path: Path) -> Any:
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def case_directories(root: Path | None = None) -> list[Path]:
    base = (root or repository_root()) / "data" / "cases"
    return sorted(path for path in base.iterdir() if path.is_dir())
