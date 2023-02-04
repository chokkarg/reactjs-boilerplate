import * as React from 'react';
import { render } from '@testing-library/react';

import { Movies } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<Movies  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Movies />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
