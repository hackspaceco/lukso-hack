import React from 'react';

import { typeServices } from '../utils';

function TypeDropdown(props) {
  const { onChange, ...rest } = props;

  const typeSelect = (e) => {
    const _chain = typeServices
      .getAllTokensData()
      .find((_item) => _item.name === e.target.value);
    onChange?.(_chain);
  };
  return (
    <select
      aria-label="Select"
      {...rest}
      onChange={typeSelect}
      className="supersearch-form-select"
    >
      {typeServices.getAllTokensData()?.map((_item) => (
        <option value={_item.name} key={_item.name}>
          {_item.label}
        </option>
      ))}
    </select>
  );
}

export default TypeDropdown;
