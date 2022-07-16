export const ERROR_MESSAGE = {
  NO_SELECTOR: '선택자를 설정해주세요.',
  INVALID_NAME_LENGTH:
    '유효하지 않은 이름 길이입니다. 자동차의 이름은 1자이상, 5자 이하만 가능합니다.',
  SMALL_NUMBER: '숫자는 최소 1 이상이여야 합니다.',
} as const;

export const CAR_NAME_LIMIT = {
  MAX: 5,
  MIN: 1,
} as const;

export const CUSTOM_EVENT_NAME = {
  saveCarNames: '@saveCarNames',
  saveMovementCount: '@saveMovementCount',
} as const;

export const EACH_RACING_TIME = 500;

export const RANDOM_NUMBER = {
  MAX: 9,
  MIN: 0,
} as const;

export const FORWARDABLE_NUMBER = 4;
