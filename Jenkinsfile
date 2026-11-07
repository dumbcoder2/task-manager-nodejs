pipeline { {
    agent any

    stages{
        stage("checkout") {
            steps{
                echo 'Checking out Task Manager project'
            }
        }
        stage("Build"){
            steps{
                echo 'Building Nodes.js application'

            }
        }
        stage('Test'){
            steps{
                echo 'Running test'
            }
        }
    }   
}