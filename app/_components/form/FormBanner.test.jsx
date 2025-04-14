import { render, screen } from '@testing-library/react';
import FormBanner from './FormBanner';

// Mock ResizeObserver to fix "not defined" error
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

it('renders the form', () => {
  render(
    <FormBanner
      onGradientChange={() => {}}
      onTextChange={() => {}}
      onSubTextChange={() => {}}
      onButtonStyleChange={() => {}}
      onButtonTextChange={() => {}}
      onButtonLinkChange={() => {}}
      onBorderWidthChange={() => {}}
      onMarginColorChange={() => {}}
      onBackgroundImageChange={() => {}}
      onShareMessageChange={() => {}}
      onTextAlignChange={() => {}}
      isBannerVisible={true}
      setIsBannerVisible={() => {}}
    />
  );
  expect(screen.getByText('Customize Banner')).toBeInTheDocument();
});