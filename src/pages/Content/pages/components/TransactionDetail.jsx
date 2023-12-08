import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import {
  formatDate,
  gasValueWeiToGwei,
  getPercentage,
  getTokenFormattedNumber,
} from '../../utils';

import { successSvg, pendingSvg } from '../../constants';
import { useGlobalContext } from '../../context/globalContext';

export default function TransactionPage({
  block,
  timestamp,
  value,
  hash,
  status,
  from,
  to,
  result,
  gas_limit,
  gas_used,
  gas_price,
  fees_paid,
  gas_metadata,
  gas_offered,
  
}) {
  const { updatePageDetail, state } = useGlobalContext();

  return (
    <div>
      <Container className="ss-p-0">
        <div className="transactionColumn">
          <Row>
            <Col md="4">
              <div className="supportText medium">Tx Hash:</div>
            </Col>
            <Col>
              <p
                className="supportText clickableText"
                onClick={() => {
                  updatePageDetail(hash, state.searchForm.chain);
                }}
              >
                {hash}
              </p>
            </Col>
          </Row>
        </div>
        <div className="transactionColumn">
          <Row className="align-items-center">
            <Col md="4">
              <div className="supportText medium">Status:</div>
            </Col>
            <Col>{result ? successSvg : pendingSvg}</Col>
          </Row>
        </div>
        <div className="transactionColumn">
          <Row>
            <Col md="4">
              <div className="supportText medium">Block:</div>
            </Col>
            <Col>
              <p
                className="supportText d-sm-inline clickableText"
                onClick={() => updatePageDetail(block, state.searchForm.chain)}
              >
                {block}
              </p>
            </Col>
          </Row>
        </div>
        <div className="transactionColumn">
          <Row>
            <Col md="4">
              <div className="supportText medium">Time Stamp:</div>
            </Col>
            <Col>
              <p className="supportText">{formatDate(timestamp, true)}</p>
            </Col>
          </Row>
        </div>
        <div className="transactionColumn">
          <Row>
            <Col md="4">
              <div className="supportText medium">From:</div>
            </Col>
            <Col>
              <p
                className="supportText clickableText"
                onClick={() => {
                  updatePageDetail(from.hash, state.searchForm.chain);
                }}
              >
                {from.hash}
              </p>
            </Col>
          </Row>
        </div>
        <div className="transactionColumn">
          <Row>
            <Col md="4">
              <div className="supportText medium">To:</div>
            </Col>
            <Col>
              <p
                className="supportText clickableText"
                onClick={() => {
                  updatePageDetail(to.hash, state.searchForm.chain);
                }}
              >
                {to.hash}
              </p>
            </Col>
          </Row>
        </div>
        <div className="transactionColumn">
          <Row>
            <Col md="4">
              <div className="supportText medium">Value:</div>
            </Col>
            <Col>
              <p className="supportText">
                {getTokenFormattedNumber(
                  Number(value),
                  gas_metadata?.contract_decimals || 0
                )}{' '}
                {gas_metadata?.contract_ticker_symbol || ''} (
                {getTokenFormattedNumber(
                  Number(value),
                  gas_metadata?.contract_decimals || 0
                )}
                )
              </p>
            </Col>
          </Row>
        </div>
        <div className="transactionColumn">
          <Row>
            <Col md="4">
              <div className="supportText medium">Transaction Fee:</div>
            </Col>
            <Col>
              <p className="supportText">
                {getTokenFormattedNumber(
                  fees_paid,
                  gas_metadata?.contract_decimals || 0,
                  false
                )}{' '}
                {gas_metadata?.contract_ticker_symbol || ''} (
                {getTokenFormattedNumber(
                  fees_paid,
                  gas_metadata?.contract_decimals || 0,
                  false
                )}
                )
              </p>
            </Col>
          </Row>
        </div>
        <div className="transactionColumn">
          <Row>
            <Col md="4">
              <div className="supportText medium">Gas Price:</div>
            </Col>
            <Col>
              <p className="supportText">{gasValueWeiToGwei(gas_price)} Gwei</p>
            </Col>
          </Row>
        </div>
        <div className="transactionColumn">
          <Row>
            <Col md="4">
              <div className="supportText medium">Gas Limit & Usage:</div>
            </Col>
            <Col>
              <p className="supportText">
                {gas_offered} | {gas_used} (
                {getPercentage(gas_used, gas_offered)}%)
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
