from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from typing import Any

from mediated_agency.io import case_directories, load_json


@dataclass(frozen=True)
class HypothesisProfile:
    hypothesis_id: str
    title: str
    status: str
    explanatory_necessity: str
    empirical_status: str
    theological_status: str
    evidence_support_count: int
    evidence_against_count: int
    assumptions_count: int
    falsifiers_count: int
    human_review_required: bool


def profile(record: dict[str, Any]) -> HypothesisProfile:
    return HypothesisProfile(
        hypothesis_id=record["hypothesisId"],
        title=record["title"],
        status=record["status"],
        explanatory_necessity=record["explanatoryNecessity"],
        empirical_status=record["empiricalStatus"],
        theological_status=record["theologicalStatus"],
        evidence_support_count=len(record.get("evidenceSupport", [])),
        evidence_against_count=len(record.get("evidenceAgainst", [])),
        assumptions_count=len(record.get("assumptions", [])),
        falsifiers_count=len(record.get("falsifiers", [])),
        human_review_required=bool(record.get("humanReviewRequired")),
    )


def load_profiles(case_directory: Path) -> list[HypothesisProfile]:
    records = load_json(case_directory / "hypotheses.json")
    return [profile(record) for record in records]


def main() -> None:
    for directory in case_directories():
        print(directory.name)
        for item in load_profiles(directory):
            gate = " HUMAN-GATE" if item.human_review_required else ""
            print(
                f"  {item.hypothesis_id}: {item.status}; "
                f"necessity={item.explanatory_necessity}; "
                f"empirical={item.empirical_status}{gate}"
            )


if __name__ == "__main__":
    main()
