from __future__ import annotations

import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "src-py"))

from mediated_agency.analysis.compare_hypotheses import load_profiles


class HypothesisProfileTests(unittest.TestCase):
    def test_pilot_profiles_include_spiritual_human_gate(self) -> None:
        case_dir = (
            ROOT
            / "data"
            / "cases"
            / "institutional-sacrificial-escalation"
        )
        profiles = load_profiles(case_dir)
        spiritual = next(
            item
            for item in profiles
            if item.hypothesis_id == "hyp-layered-spiritual"
        )
        self.assertTrue(spiritual.human_review_required)
        self.assertEqual(
            spiritual.empirical_status,
            "not-empirically-testable"
        )

    def test_all_profiles_have_falsifiers(self) -> None:
        case_dir = (
            ROOT
            / "data"
            / "cases"
            / "institutional-sacrificial-escalation"
        )
        for item in load_profiles(case_dir):
            self.assertGreater(item.falsifiers_count, 0)


if __name__ == "__main__":
    unittest.main()
