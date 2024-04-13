import React from 'react';
import { Form } from 'react-bootstrap';

const PopularityFilter = ({ onSortChange }) => {
  return (
    <Form.Select
      aria-label="Popular"
      onChange={(e) => onSortChange(e.target.value)}
    >
      <option>정렬</option>
      <option value="desc">인기도 높은순</option>
      <option value="asc">인기도 낮은순</option>
    </Form.Select>
  );
};

export default PopularityFilter;
