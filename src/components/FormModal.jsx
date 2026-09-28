'use client'

import {Form, Input, InputNumber, Modal } from 'antd'

export default function FormModal({ openModal, serie, confirmLoading, onSubmit, onCancel}) {
   const [form] = Form.useForm();
   
    return (
        <Modal 
        open={openModal}
        title={serie ? 'Editar Série' : 'Criar nova Série'}
        centered
        onOk={() => form.onSubmit()}
        onCancel={onCancel}
        confirmLoading={confirmLoading}
        destroyOnHide>
            <Form form={form} layout="vertical" initialValues={serie} onFinish={onSubmit}>
                <Form.Item 
                    name="title"
                    label="Título"
                    rules={[{
                        required: true, 
                        min: 3, 
                        max: 120, 
                        message: 'O título deve ter entre 3 e 120 caracteres.'
                        }]}>
                            <Input placeholder='ex: Breaking Bad' />
                    </Form.Item>

                    <Form.Item 
                    name="plataforma"
                    label="Plataforma"
                    rules={[{
                        required: true, 
                        message: 'A plataforma é obrigatória.'
                        }]}>
                            <Input placeholder='ex: Netflix' />
                    </Form.Item>

                    <Form.Item 
                    name="numero_temporadas"
                    label="temporadas"
                    rules={[{
                        required: true, 
                        type: 'number',
                        message: 'O número de temporadas é obrigatório .'
                        }]}>
                            <Input placeholder='ex: 5' min={1} style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item 
                    name="ano_lancamento"
                    label="ano de lançamento"
                    rules={[{
                        required: true, 
                        type: 'number',
                        message: 'Ano de lançamento é obrigatório .'
                        }]}>
                            <Input placeholder='ex: 2008' min={1900} style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item 
                    name="imagemUrl"
                    label="URL da Imagem"
                    rules={[{ 
                        type: 'url',
                        message: 'Deve ser uma Url válida'
                        }]}>
                            <Input placeholder='ex: https://codeverse.dev.br.br/breaking-bad.png' /> 
                    </Form.Item>
            </Form>
        </Modal>
    );
}