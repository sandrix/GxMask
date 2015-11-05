<?xml version='1.0'?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:msxml="urn:schemas-microsoft-com:xslt"
	xmlns:gx="urn:shemas-artech-com:gx"
	exclude-result-prefixes="msxml gx"
	xmlns:gxca="urn:GXControlAdap">
  <xsl:output method="html"/>
  <xsl:template match="/" >
    <xsl:apply-templates select="/GxControl"/>
  </xsl:template>
  <xsl:template match="GxControl">
    <xsl:choose>
      <xsl:when test="@type = 'GxMask'">
        <xsl:call-template name="GxMask"/>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <!-- SuperMask design render -->
  <!-- ///////////////////  Implement your render here  ///////////////////-->
  <!--
	* Author: Daniel San Martin Pascal Filho
	* e-mail: daniel.smpf@gmail.com
	* Created at: 05/11/2015
  -->
  <xsl:template name="GxMask">
    <span atomicselection="true">		
      GxMask: <xsl:value-of select="gxca:GetPropValue('Picture')"/>      
    </span>
  </xsl:template>


  <!-- Helpers Templates -->

  <xsl:template name="AddStyleAttribute" >
    <xsl:variable name="Style">
      <xsl:text>border-style: solid;	border-width: 2px;</xsl:text>
    </xsl:variable>
    <xsl:attribute name="style">
      <xsl:value-of select="$Style"/>
    </xsl:attribute>
  </xsl:template>
</xsl:stylesheet>
