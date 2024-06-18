let isHovered = false;
let hoverType = "";

export function setHoverType(value) {
  hoverType = value;
}

export function getHoverType() {
  return hoverType;
}

export function setHovered(value) {
  isHovered = value;
}

export function getHovered() {
  return isHovered;
}
