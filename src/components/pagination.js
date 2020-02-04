import React from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";

import Flex from "./base/flex";
import Box from "./base/box";

import useWindowSize from "../utils/use-window-size";

const PageBullet = styled(Flex)`
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.red};
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.red};

  justify-content: center;
  align-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  height: 32px;
  width: 32px;
  margin-right: 5px;
  margin-left: 5px;

  ${props =>
    props.active &&
    css`
      background-color: ${props => props.theme.colors.red};
      color: ${props => props.theme.colors.white};
    `};
`;

const Arrow = styled(Box)`
  color: ${props => props.theme.colors.red};
  cursor: pointer;
  height: 16px;
  width: 12px;
  font-size: 12px;

  ${props =>
    props.disable &&
    css`
      color: ${props => props.theme.colors.lightRose};
    `};

  ${props =>
    props.right &&
    css`
      @media (max-width: 768px) {
        margin-left: 54px;
      }
    `};

  ${props =>
    props.left &&
    css`
      @media (max-width: 768px) {
        margin-right: 54px;
      }
    `};
`;

const Pagination = ({ totalPerPage, total }) => {
  const history = useHistory();
  const { id, searchName } = useParams();
  const pageNumber = parseInt(id) || 1;
  const totalPages = total / totalPerPage;
  const [width] = useWindowSize();

  let pageBulletLimit = 5;
  if (width <= 768) {
    pageBulletLimit = 2;
  }

  const pageNumbers = [];
  for (let i = pageNumber; i <= pageNumber + pageBulletLimit; i++) {
    pageNumbers.push(i);
  }

  const getBaseUrl = () => {
    if (searchName) {
      return `/search/${searchName}/`;
    }
    return "/page/";
  };

  const previousPage = () => {
    if (pageNumber - 1 < 1) return;
    history.push(`${getBaseUrl()}${pageNumber - 1}`);
  };

  const nextPage = () => {
    if (pageNumber + 1 > totalPages) return;
    history.push(`${getBaseUrl()}${pageNumber + 1}`);
  };

  return (
    <Flex direction="row" align="center">
      <Arrow
        left
        disable={pageNumber - 1 < 1}
        onClick={previousPage}
        data-testid="arrow-back"
      >
        ◀
      </Arrow>
      {pageNumbers.map(number => (
        <PageBullet
          active={number === pageNumber}
          key={number}
          onClick={() => history.push(`${getBaseUrl()}${number}`)}
          data-testid="page-bullet"
        >
          {number}
        </PageBullet>
      ))}
      <Arrow
        right
        disable={pageNumber + 1 > totalPages}
        onClick={nextPage}
        data-testid="arrow-next"
      >
        ►
      </Arrow>
    </Flex>
  );
};

export default Pagination;
