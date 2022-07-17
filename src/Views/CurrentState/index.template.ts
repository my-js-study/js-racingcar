export default class Template {
  getNameTag(carNames: string[]) {
    return carNames
      .map(
        (carName, index) => `
          <div id="car-${index}" class="mr-2 car-player-wrapper">
            <div class="car-player">${carName}</div>
          </div>
      `,
      )
      .join('');
  }

  getSpinnerIcon() {
    return `
      <div class="d-flex justify-center mt-3 spinner-icon">
        <div class="relative spinner-container">
          <span class="material spinner"></span>
        </div>
      </div>
    `;
  }

  getForwardIcon() {
    return `
      <div class="forward-icon mt-2">⬇️</div>
    `;
  }
}
