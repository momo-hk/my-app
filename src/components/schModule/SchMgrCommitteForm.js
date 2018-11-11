import React, {Component} from 'react';
import {WSInput} from 'components/shared';
import { Form, Tooltip, Row, Col, Button, Card } from 'antd';
import PropTypes from 'prop-types';
import getValidationRules from 'utils/schModule/validationRules';
import {WSSelect} from 'components/shared';
import './SchMgrCommitteForm.css';

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

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.form.validateFields((error, fieldsValue) => {
      console.log('Receive values of form:', fieldsValue);
    });
  }

  componentDidMount() {
    const { formData, form } = this.props;
    if (formData) {
      form.setFields({
        ...formData
      });
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { formTitle, onBackHandler } = this.props;

    return (
      <Card title={formTitle}>
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} className="ant-form-item-with-help">
            {
              getFieldDecorator('nameEng', {rules: getValidationRules('committe', 'engName')})(
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
                    <WSSelect width={120} label="性別" items={sex} />
                  )
                }
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem>
              {
                getFieldDecorator('status')(
                  <WSSelect width={180} label="成員身份" items={status} />
                )
              }
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem>
                {
                  getFieldDecorator('representative', {rules: getValidationRules('committe', 'representative')} )(
                    <WSSelect width={180} label="代表組別" items={representative} />
                  )
                }
              </FormItem>
            </Col>
          </Row>

          <FormItem {...formItemLayout}>
            {
              getFieldDecorator('hkid')(
                <WSInput label="香港身份證號碼" />
              )
            }
          </FormItem>

          <FormItem {...formItemLayout}>
            {
              getFieldDecorator('occupation')(
                <WSInput label="職業" />
              )
            }
          </FormItem>

          <FormItem {...formItemLayout}>
            {
              getFieldDecorator('email')(
                <WSInput label="電郵地址" />
              )
            }
          </FormItem>

          <FormItem>
            <Row style={{ textAlign: 'left' }}>
              <Col span={8}>
                <WSInput label="電話號碼(1)" />
              </Col>
              <Col span={8}>
                <WSInput label="電話號碼(2)" />
              </Col>
              <Col span={8}>
                <WSInput label="傳真號碼" />
              </Col>
            </Row>
          </FormItem>

          <div className="buttonGrp">
            <Button className="button" icon="save" htmlType="submit">儲存</Button>
            <Button className="button" onClick={onBackHandler}>返回前頁</Button>
          </div>
        </Form>
      </Card>
    );
  }
}

SchMgrCommitteForm.propTypes = {
  formTitle: PropTypes.string,
  formData: PropTypes.object,
  onSaveHandler: PropTypes.func,  
  onBackHandler: PropTypes.func,
}

export default Form.create()(SchMgrCommitteForm);