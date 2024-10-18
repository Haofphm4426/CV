import { useState } from 'react';
import { Modal, Col, Row } from 'antd';
import { FcTodoList } from 'react-icons/fc';
import { MdOutlineRealEstateAgent } from 'react-icons/md';
import { FaPaperclip } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { Typography } from 'antd';

const { Title } = Typography;

interface IProject {
    image: JSX.Element;
    title: string;
    shortDescriptions: string;
    details: {
        frontend: string;
        backend: string;
        member: number;
        demo: string;
        github: string;
    };
}

const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [dataDetail, setDataDetail] = useState<IProject | null>(null);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setDataDetail(null);
    };

    const dataProjects: IProject[] = [
        {
            image: <FcTodoList size={50} color={'#2bebfd'} />,
            title: 'ToDoList',
            shortDescriptions:
                'ToDoList is a project management tool that allows team members to organize tasks, workflows, and projects...',
            details: {
                frontend: 'ReactJS(Hook, Redux Toolkit, React-Router-DOM), Axios, Bootstrap',
                backend: 'ExpressJS, MongoDB, SocketIO, Redis, Cloudinary ',
                member: 1,
                demo: '',
                github: 'https://github.com/Haofphm4426/ToDoList-app',
            },
        },
        {
            image: <MdOutlineRealEstateAgent size={50} color={'green'} />,
            title: 'Real Estate',
            shortDescriptions:
                'A Real Estate Management System website is a platform used to manage property and customer efficiently...',
            details: {
                frontend: 'HTML, CSS, Javascript, Jquery, Bootstrap,',
                backend: 'Spring Boot, JPA, Spring Data JPA, Spring Security',
                member: 1,
                demo: '',
                github: 'https://github.com/Haofphm4426/Real-Estate-Management-System-Webiste',
            },
        },
        {
            image: <FaPaperclip size={50} color={'#041230'} />,
            title: 'Porfolio',
            shortDescriptions:
                'A portfolio website is a personal platform used to showcase an individual’s work, skills, and accomplishments. ...',
            details: {
                frontend: 'ReactJS, Typescript, Antd',
                backend: '',
                member: 1,
                demo: 'https://cv-haofphm4426s-projects.vercel.app/',
                github: 'https://github.com/Haofphm4426/CV',
            },
        },
    ];
    return (
        <>
            <Modal
                title={dataDetail && dataDetail.title ? dataDetail.title : ''}
                open={isModalOpen}
                onOk={handleCloseModal}
                onCancel={handleCloseModal}
                footer={null}
                maskClosable={false}
            >
                {dataDetail && (
                    <>
                        {dataDetail.details.frontend && (
                            <Row>
                                <Col span={4}>
                                    <Title level={5}>Frontend:</Title>
                                </Col>
                                <Col span={20}>
                                    <Title level={5} style={{ fontWeight: '400' }}>
                                        {dataDetail.details.frontend}
                                    </Title>
                                </Col>
                            </Row>
                        )}
                        {dataDetail.details.backend && (
                            <Row>
                                <Col span={4}>
                                    <Title level={5}>Backend:</Title>
                                </Col>
                                <Col span={20}>
                                    <Title level={5} style={{ fontWeight: '400' }}>
                                        {dataDetail.details.backend}
                                    </Title>
                                </Col>
                            </Row>
                        )}

                        <Row>
                            <Col span={4}>
                                <Title level={5}>Member:</Title>
                            </Col>
                            <Col span={20}>
                                <Title level={5} style={{ fontWeight: '400' }}>
                                    {dataDetail.details.member}
                                </Title>
                            </Col>
                        </Row>

                        {dataDetail.details.demo && (
                            <Row>
                                <Col span={4}>
                                    <Title level={5}>Demo:</Title>
                                </Col>
                                <Col span={20}>
                                    <Title level={5} style={{ fontWeight: '400' }}>
                                        <a href={dataDetail.details.demo} target="_blank">
                                            {dataDetail.details.demo}
                                        </a>
                                    </Title>
                                </Col>
                            </Row>
                        )}
                        {dataDetail.details.github && (
                            <Row>
                                <Col span={4}>
                                    <Title level={5}>Github:</Title>
                                </Col>
                                <Col span={20}>
                                    <Title level={5} style={{ fontWeight: '400' }}>
                                        <a href={dataDetail.details.github} target="_blank">
                                            {dataDetail.details.github}
                                        </a>
                                    </Title>
                                </Col>
                            </Row>
                        )}
                    </>
                )}
            </Modal>
            <div className="arlo_tm_section" id="projects">
                <div className="arlo_tm_services_wrap">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>Projects</h3>
                            <span>Here are a few of my projects</span>
                        </div>
                        <div className="list_wrap">
                            <ul>
                                {dataProjects.map((item, index) => {
                                    return (
                                        <li key={`${index}-project`}>
                                            <div
                                                className="inner"
                                                title="View Detail"
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setDataDetail(item);
                                                    setIsModalOpen(true);
                                                }}
                                            >
                                                <div className="icon">{item.image}</div>
                                                <div className="title_service">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <div className="text">
                                                    <p>{item.shortDescriptions}</p>
                                                </div>
                                                <div className="view-detail">
                                                    <div
                                                        style={{
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            justifyContent: 'left',
                                                            alignItems: ' center',
                                                            color: '#e3872d',
                                                            fontWeight: 'bold',
                                                        }}
                                                    >
                                                        <BsArrowRight />
                                                        &nbsp; View Detail
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;
