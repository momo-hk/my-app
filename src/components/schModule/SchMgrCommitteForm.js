import React, {Component} from 'react';
import {WSInput} from 'components/shared';
import { Form, Tooltip, Row, Col } from 'antd';
import getValidationRules from 'utils/schModule/validationRules';
import {WSSelect} from 'components/shared';

// for developement purpose only
import {sex, status, representative} from 'data/committeForm';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    sm: { span: 4 },
  },
  wrapperCol: {
    sm: { span: 12 },
  },
};

const Hint = (props) => {
  const {message} = props;
  return (
    <span>
      <Tooltip title={message}>
        <span>Hint</span>
      </Tooltip>
    </span>
  );
}

class SchMgrCommitteForm extends Component {

  handleSubmit() {

  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout}>
          {
            getFieldDecorator('nameEng', {rules: getValidationRules('committe', 'nameEng')})(
              <WSInput label="姓名(英)" />
            )
          }
        </FormItem>

        <FormItem {...formItemLayout}>
          {
            getFieldDecorator('nameChi')(
              <WSInput label="姓名(中)" />
            )
          }
        </FormItem>

        <Row style={{ textAlign: 'left' }}>
          <Col span={4}>
            <FormItem>
              {
                getFieldDecorator('sex')(
                  <WSSelect width={100} label="性別" items={sex} />
                )
              }
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem>
            {
              getFieldDecorator('status')(
                <WSSelect width={200} label="成員身份" items={status} />
              )
            }
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem>
              {
                getFieldDecorator('representative')(
                  <WSSelect width={250} label="代表組別" items={representative} />
                )
              }
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Form.create()(SchMgrCommitteForm);