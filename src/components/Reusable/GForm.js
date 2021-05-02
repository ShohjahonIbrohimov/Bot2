import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select } from "antd";
import ImageUpload from "./ImageUpload";

const { Option } = Select;
const { TextArea } = Input;

const GForm = ({
  fields,
  handleAddCategory,
  handleUpdateCategory,
  defaults,
}) => {
  const [form] = Form.useForm();
  const [imageUrl, setimageUrl] = useState("");
  const [videoUrl, setvideoUrl] = useState("");

  const onFinish = (values) => {
    defaults
      ? handleUpdateCategory({ ...values, img: imageUrl, video: videoUrl })
      : handleAddCategory({ ...values, img: imageUrl, video: videoUrl });
    form.resetFields();
    setimageUrl("");
  };

  useEffect(() => {
    if (defaults) {
      let data = defaults.data;
      form.setFieldsValue({
        ...data,
        ...data.title,
        descUz: data?.desc?.uz,
        descRu: data?.desc?.ru,
      });
      setimageUrl(defaults?.data?.img);
      setvideoUrl(defaults?.data?.video);
    } else {
      form.resetFields();
      setimageUrl("");
      setvideoUrl("");
    }
  }, [defaults]);

  return (
    <Form form={form} onFinish={onFinish} size='large'>
      {fields.map((field) => {
        if (field.type === "select") {
          return (
            <Form.Item
              name={field.name}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder={field.placeHolder} allowClear>
                {field.options.map((o) => (
                  <Option value={o.value}>{o.label}</Option>
                ))}
              </Select>
            </Form.Item>
          );
        } else if (field.type === "image" || field.type === "video") {
          return (
            <ImageUpload
              type={field.type}
              imageUrl={imageUrl}
              setimageUrl={setimageUrl}
              videoUrl={videoUrl}
              setvideoUrl={setvideoUrl}
            />
          );
        } else if (field.type === "textarea") {
          return (
            <Form.Item
              name={field.name}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextArea placeholder={field.placeHolder} rows={10} />
            </Form.Item>
          );
        } else {
          return (
            <Form.Item
              name={field.name}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder={field.placeHolder} />
            </Form.Item>
          );
        }
      })}

      <Form.Item>
        <Button
          block
          type='primary'
          htmlType='submit'
          className='login-form-button'
        >
          {defaults ? "UPDATE" : "ADD"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default GForm;
