// React and Next.js imports
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

// Styling and UI components
import { cn } from './utils'

import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select'

// Icons
import { ChevronDown, ChevronUp, X, Menu, Search, User, Settings, LogOut } from 'lucide-react'

// Types
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'

export {
  // React
  React,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  
  // Next.js
  useRouter,
  Link,
  Image,
  
  // Styling and UI
  cn,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  
  // Icons
  ChevronDown,
  ChevronUp,
  X,
  Menu,
  Search,
  User,
  Settings,
  LogOut,
  
  // Types
  AppProps,
  NextPage,
}

