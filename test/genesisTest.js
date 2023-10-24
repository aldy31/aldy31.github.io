const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Genesis Smart Contract", function () {
    let Genesis;
    let genesis;
    let owner;
    let addr1;

    beforeEach(async function () {
        Genesis = await ethers.getContractFactory("Genesis");
        [owner, addr1] = await ethers.getSigners();
        genesis = await Genesis.deploy(10); // 10% project tax
        await genesis.deployed();
    });

    it("Should create a project", async function () {
        await genesis.connect(addr1).createProject("Project Title", "Project Description", "image.jpg", ethers.utils.parseEther("1"), Math.floor(Date.now() / 1000) + 3600);
        const projects = await genesis.getProjects();
        expect(projects.length).to.equal(1);
    });

    it("Should back a project", async function () {
        await genesis.connect(addr1).createProject("Project Title", "Project Description", "image.jpg", ethers.utils.parseEther("1"), Math.floor(Date.now() / 1000) + 3600);
        const projects = await genesis.getProjects();
        const projectId = projects[0].id;
        await genesis.connect(owner).backProject(projectId, { value: ethers.utils.parseEther("0.5") });
        const backers = await genesis.getBackers(projectId);
        expect(backers.length).to.equal(1);
    });

    it("Should not allow backing a project after expiration", async function () {
        await genesis.connect(addr1).createProject("Project Title", "Project Description", "image.jpg", ethers.utils.parseEther("1"), Math.floor(Date.now() / 1000) + 1); // 1 second expiration
        const projects = await genesis.getProjects();
        const projectId = projects[0].id;
        await ethers.provider.send("evm_increaseTime", [2]); // Move time forward by 2 seconds
        await expect(genesis.connect(owner).backProject(projectId, { value: ethers.utils.parseEther("0.5") })).to.be.revertedWith("Project no longer opened");
    });

    it("Should revert project after expiration", async function () {
        await genesis.connect(addr1).createProject("Project Title", "Project Description", "image.jpg", ethers.utils.parseEther("1"), Math.floor(Date.now() / 1000) + 1); // 1 second expiration
        const projects = await genesis.getProjects();
        const projectId = projects[0].id;
        await ethers.provider.send("evm_increaseTime", [2]); // Move time forward by 2 seconds
        await genesis.connect(owner).backProject(projectId, { value: ethers.utils.parseEther("0.5") });
        const project = await genesis.getProject(projectId);
        expect(project.status).to.equal(3); // statusEnum.REVERTED
    });

    // Add more test cases as needed

});
