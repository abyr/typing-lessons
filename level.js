const LEVELS_DEFINITION_MAP = {
  expert: {
    title: 'Expert',
    ratio: 1,
    color: 'green'
  },
  proficient: {
    title: 'Proficient',
    ratio: 0.8,
    color: 'green'
  },
  competent: {
    title: 'Competent',
    ratio: 0.6,
    color: 'blue'
  },
  advanced_beginner: {
    title: 'Advanced beginner',
    ratio: 0.4,
    color: 'yellow'
  },
  novice: {
    title: 'Novice',
    ratio: 0.2,
    color: 'yellow'
  },
  fail: {
    title: 'Failed',
    ratio: 0,
    color: 'red'
  }
};

function getLevel(stats) {
  const ratio = 1 - stats.totalErrors / 10;

  if (ratio <= 0) {
    return LEVELS_DEFINITION_MAP.fail;
  } else {
    return Object.values(LEVELS_DEFINITION_MAP).find(x => x.ratio <= ratio);
  }

}

module.exports = { getLevel };
