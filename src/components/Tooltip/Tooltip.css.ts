import styled from "styled-components";

/* Wrapping */
export const TooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
`

/* Absolute positioning */
export const TooltipUI = styled.div`
  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px;
  color: var(--tooltip-text-color);
  background: var(--tooltip-background-color);
  font-size: 14px;
  font-family: sans-serif;
  line-height: 1;
  z-index: 100;
  white-space: nowrap;

  &::before {
    content: " ";
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: var(--tooltip-arrow-size);
    margin-left: calc(var(--tooltip-arrow-size) * -1);
  }

  &.top {
    top: calc(var(--tooltip-margin) * -1);

    &::before {
      top: 100%;
      border-top-color: var(--tooltip-background-color);
    }
  } 

  &.right {
    left: calc(100 % + var(--tooltip - margin));
    top: 50 %;
    transform: translateX(0) translateY(-50 %);

    &::before {
      left: calc(var(--tooltip - arrow - size) * -1);
      top: 50 %;
      transform: translateX(0) translateY(-50 %);
      border - right - color: var(--tooltip - background - color);
    }
  }

  &.bottom {
    bottom: calc(var(--tooltip - margin) * -1);

    &::before {
      bottom: 100 %;
      border - bottom - color: var(--tooltip - background - color);
    }
  }

  &.left {
    left: auto;
    right: calc(100 % + var(--tooltip - margin));
    top: 50 %;
    transform: translateX(0) translateY(-50 %);

    &::before {
      left: auto;
      right: calc(var(--tooltip - arrow - size) * -2);
      top: 50 %;
      transform: translateX(0) translateY(-50 %);
      border - left - color: var(--tooltip - background - color);
    }
  }
`
