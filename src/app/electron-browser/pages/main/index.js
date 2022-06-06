import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clsx from 'clsx';

import EditorAction from '../../redux/editorActions';

//import Editor from '../../components/editor';

// import Previewer from '../../components/preview';
import LazyLog from '../../components/lazy-log';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        //debugger;
        const { newDoc,
            openDoc,
            handleDocChanged,
            saveDoc,
            generateDoc,
            close
        } = this.props.EditorAction;
        const { content, content0 } = this.props.source;
        const errores = this.props.errores || [];
        console.log(content);
        return (
            <main className={clsx(this.props.className, 'd-flex', 'flex-column')}>
                <div className="row p-1">
                    <div className="btn-toolbar">
                        <div className="btn-group">
                            <button className=" btn btn-secondary" onClick={() => newDoc()}>新建</button>
                            <button className="btn btn-primary" onClick={() => openDoc()}>打开</button>
                            <button className="btn btn-primary" onClick={() => saveDoc()}>保存</button>
                        </div>
                        <div className="btn-group ms-2">
                            <button className="btn btn-secondary" onClick={() => generateDoc()}>生成</button>
                        </div>
                        <div className="btn-group ms-2">
                            <button className="btn btn-secondary" onClick={() => close()}>关闭</button>
                        </div>
                    </div>
                </div>
                <div className="row p-1">
                    {errores.map(item => (
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            {item.message}
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    ))}
                </div>
                <div className="row flex-fill p-1">
                    {/* <Editor className="col-md-6" content={content} onChange={(newC) => { handleDocChanged(newC) }}></Editor> */}
                    {/* <Previewer className="col-md-6" readOnly value={content}></Previewer> */}
                </div>
                <LazyLog></LazyLog>
            </main>
        );
    }
    componentDidMount() {
        //this.props.MainActions.login('name','888888');
    }
}

export default connect(
    state => {
        return state.root.editor;
    },
    dispatch => ({
        EditorAction: bindActionCreators(EditorAction, dispatch),
    })
)(Main);
