import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useSelector } from "react-redux";

const NicknameEditForm = () => {
  const { isEditingNickname } = useSelector((state) => state.user);
  const [editedName, setEditedName] = useState('');
  return (
    <Form style={{ marginBottom: '20px', border: '1px solid #d9d9d9', padding: '20px' }}>
      <Input addonBefore="닉네임" />
      <Button type="primary">수정</Button>
    </Form>
  );
};

export default NicknameEditForm;
