import Head from "next/head";

import Container from "../components/container";
import Layout from "../components/layout";
import {Canvas} from "../components/canvas";

export default function Index() {
    const date1 = new Date('2021');
    const date2 = new Date();

    const diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);

    return (
        <div className='overflow-y-hidden'>
            <Layout>
                <Head/>
                <Container>
                    <div
                        className='h-screen relative'
                    >
                        <Canvas
                            className='m-auto w-screen absolute top-0 left-0 right-0'
                        />
                        <div
                            className='flex flex-col items-center justify-center py-16 absolute top-0 left-0 right-0 bottom-0'>
                            <div className='flex flex-col items-center justify-center'>
                                <h1
                                    className='text-6xl lg:text-8xl text-center text-white'
                                >
                                    {diffDays}
                                </h1>
                            </div>
                        </div>

                    </div>
                </Container>
            </Layout>
        </div>
    )
}
