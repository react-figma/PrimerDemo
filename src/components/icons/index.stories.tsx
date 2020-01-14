import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {withKnobs} from "@storybook/addon-knobs";
import { withInfo } from '@storybook/addon-info';
import {GistLogo} from "./GistLogo";
import {GitHubLogo} from "./GitHubLogo";
import {GitHubMark} from "./GitHubMark";
import {Markdown} from "./Markdown";
import {Octoface} from "./Octoface";
import {Paintcan} from "./Paintcan";
import {Thumbsdown} from "./Thumbsdown";
import {Smiley} from "./Smiley";
import {GistSecret} from "./GistSecret";
import {Thumbsup} from "./Thumbsup";
import {Hubot} from "./Hubot";
import {Organization} from "./Organization";
import {Person} from "./Person";
import {Eye} from "./Eye";
import {EyeClosed} from "./EyeClosed";
import {Jersey} from "./Jersey";
import {Code} from "./Code";
import {DiffAdded} from "./DiffAdded";
import {DiffIgnored} from "./DiffIgnored";
import {Gist} from "./Gist";
import {DiffModified} from "./DiffModified";
import {DiffRemoved} from "./DiffRemoved";
import {GitPullRequest} from "./GitPullRequest";
import {IssueReopened} from "./IssueReopened";
import {NoNewLine} from "./NoNewLine";
import {Broadcast} from "./Broadcast";
import {Keyboard} from "./Keyboard";
import {FileZip} from "./FileZip";
import {FileBinary} from "./FileBinary";
import {FileCode} from "./FileCode";
import {FileDirectory} from "./FileDirectory";
import {FileMedia} from "./FileMedia";
import {FilePdf} from "./FilePdf";
import {FileSubmodule} from "./FileSubmodule";
import {FileSymlinkDirectory} from "./FileSymlinkDirectory";
import {FileSymlinkFile} from "./FileSymlinkFile";
import {Browser} from "./Browser";
import {File} from "./File";
import {RepoClone} from "./RepoClone";
import {RepoForcePush} from "./RepoForcePush";
import {RepoForked} from "./RepoForked";
import {RepoPull} from "./RepoPull";
import {RepoPush} from "./RepoPush";
import {Repo} from "./Repo";
import {Ruby} from "./Ruby";
import {Mirror} from "./Mirror";
import {Server} from "./Server";
import {Terminal} from "./Terminal";
import {RadioTower} from "./RadioTower";
import {Rss} from "./Rss";
import {Versions} from "./Versions";
import {Dependent} from "./Dependent";
import {RepoTemplate} from "./RepoTemplate";
import {RepoTemplatePrivate} from "./RepoTemplatePrivate";
import {Workflow} from "./Workflow";
import {WorkflowAll} from "./WorkflowAll";
import {defaultBackground} from "../storybook-decorators/DefaultBackground";


storiesOf('Icons', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .addDecorator(defaultBackground)
    .add('Gist Logo', () => <GistLogo/>)
    .add('GitHub Logo', () => <GitHubLogo/>)
    .add('GitHub Mark', () => <GitHubMark/>)
    .add('Markdown', () => <Markdown/>)
    .add('Octoface', () => <Octoface/>)
    .add('Paintcan', () => <Paintcan/>)
    .add('Thumbsdown', () => <Thumbsdown />)
    .add('Smiley', () => <Smiley/>)
    .add('GistSecret', () => <GistSecret/>)
    .add('Thumbsup', () => <Thumbsup/>)
    .add('Hubot', () => <Hubot/>)
    .add('Organization', () => <Organization/>)
    .add('Person', () => <Person/>)
    .add('Eye', () => <Eye/>)
    .add('EyeClosed', () => <EyeClosed/>)
    .add('Jersey', () => <Jersey/>)
    .add('Code', () => <Code/>)
    .add('DiffAdded', () => <DiffAdded/>)
    .add('DiffIgnored', () => <DiffIgnored/>)
    .add('Gist', () => <Gist/>)
    .add('DiffModified', () => <DiffModified/>)
    .add('DiffRemoved', () => <DiffRemoved/>)
    .add('GitPullRequest', () => <GitPullRequest/>)
    .add('IssueReopened', () => <IssueReopened/>)
    .add('NoNewLine', () => <NoNewLine/>)
    .add('Broadcast', () => <Broadcast/>)
    .add('Keyboard', () => <Keyboard/>)
    .add('FileZip', () => <FileZip/>)
    .add('FileBinary', () => <FileBinary/>)
    .add('FileCode', () => <FileCode/>)
    .add('FileDirectory', () => <FileDirectory/>)
    .add('FileMedia', () => <FileMedia/>)
    .add('FilePdf', () => <FilePdf/>)
    .add('FileSubmodule', () => <FileSubmodule/>)
    .add('FileSymlinkDirectory', () => <FileSymlinkDirectory/>)
    .add('FileSymlinkFile', () => <FileSymlinkFile/>)
    .add('Browser', () => <Browser/>)
    .add('File', () => <File/>)
    .add('RepoClone', () => <RepoClone/>)
    .add('RepoForcePush', () => <RepoForcePush/>)
    .add('RepoForked', () => <RepoForked/>)
    .add('RepoPull', () => <RepoPull/>)
    .add('RepoPush', () => <RepoPush/>)
    .add('Repo', () => <Repo/>)
    .add('Ruby', () => <Ruby/>)
    .add('Mirror', () => <Mirror/>)
    .add('Server', () => <Server/>)
    .add('Terminal', () => <Terminal/>)
    .add('RadioTower', () => <RadioTower/>)
    .add('Rss', () => <Rss/>)
    .add('Versions', () => <Versions/>)
    .add('Dependent', () => <Dependent/>)
    .add('RepoTemplate', () => <RepoTemplate/>)
    .add('RepoTemplatePrivate', () => <RepoTemplatePrivate/>)
    .add('Workflow', () => <Workflow/>)
    .add('WorkflowAll', () => <WorkflowAll/>);
