// Based on https://raw.githubusercontent.com/scala-js/scalajs-cross-compile-example/master/build.sbt

Global / onChangedBuildSource := ReloadOnSourceChanges
ThisBuild / scalaVersion := "2.13.1"

/*
  Compile loop for coding:
    sbt ~ethmodelJS/compile

  Build unoptimized js
    sbt ethmodelJS/fastOptJS  --> outputs js/target/scala-2.13/ethmodel-fastopt.js{,.map}

  Build production js
    sbt ethmodelJS/fullOptJS  --> outputs js/target/scala-2.13/ethmodel-opt.js{,.map}

  Build for jvm
    sbt ethmodelJVM/compile

  To run a main function in a JS build, see scalaJSUseMainModuleInitializer which we have disabled so as to build in library mode.
*/

lazy val root = project.in(file(".")).
  aggregate(ethmodel.js, ethmodel.jvm).
  settings(
    publish := {},
    publishLocal := {},
  )

lazy val ethmodel = crossProject(JSPlatform, JVMPlatform).in(file(".")).
  settings(
    name := "ethmodel",
    version := "0.1.1",
  ).
  jvmSettings(
    // Add JVM-specific settings here
  ).
  jsSettings(
    // Add JS-specific settings here
    scalaJSLinkerConfig ~= { _.withModuleKind(ModuleKind.ESModule) }
  )
