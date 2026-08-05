from __future__ import annotations

from collections import Counter

from mediated_agency.analysis.compare_hypotheses import load_profiles
from mediated_agency.io import case_directories


def main() -> None:
    statuses: Counter[str] = Counter()
    empirical: Counter[str] = Counter()
    total = 0

    for directory in case_directories():
        for item in load_profiles(directory):
            total += 1
            statuses[item.status] += 1
            empirical[item.empirical_status] += 1

    print(f"Hypotheses: {total}")
    print("Attribution status:")
    for key, value in sorted(statuses.items()):
        print(f"  {key}: {value}")
    print("Empirical status:")
    for key, value in sorted(empirical.items()):
        print(f"  {key}: {value}")


if __name__ == "__main__":
    main()
